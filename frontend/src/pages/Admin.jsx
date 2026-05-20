import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import * as api from "../utils/api";
import "../styles/admin.css";

const Admin = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("pending");
  const [pendingItems, setPendingItems] = useState({
    music: [],
    art: [],
    scripts: [],
  });
  const [loading, setLoading] = useState(true);
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
      return;
    }

    // Fetch pending approvals
    api
      .getPendingApprovals()
      .then((res) => {
        setPendingItems(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    // Fetch festivals
    api
      .getFestivals()
      .then((res) => setFestivals(res.data))
      .catch((err) => console.error(err));
  }, [user, navigate]);

  const handleApproveMusic = (id) => {
    api
      .approveMusicItem(id)
      .then(() => {
        setPendingItems({
          ...pendingItems,
          music: pendingItems.music.filter((m) => m._id !== id),
        });
        alert("Music approved!");
      })
      .catch((err) => alert("Error: " + err.message));
  };

  const handleDeleteMusic = (id) => {
    if (window.confirm("Are you sure you want to delete this music?")) {
      api
        .deleteMusic(id)
        .then(() => {
          setPendingItems({
            ...pendingItems,
            music: pendingItems.music.filter((m) => m._id !== id),
          });
          alert("Music deleted!");
        })
        .catch((err) => alert("Error: " + err.message));
    }
  };

  const handleApproveArt = (id) => {
    api
      .approveArtItem(id)
      .then(() => {
        setPendingItems({
          ...pendingItems,
          art: pendingItems.art.filter((a) => a._id !== id),
        });
        alert("Art approved!");
      })
      .catch((err) => alert("Error: " + err.message));
  };

  const handleDeleteArt = (id) => {
    if (window.confirm("Are you sure you want to delete this art?")) {
      api
        .deleteArt(id)
        .then(() => {
          setPendingItems({
            ...pendingItems,
            art: pendingItems.art.filter((a) => a._id !== id),
          });
          alert("Art deleted!");
        })
        .catch((err) => alert("Error: " + err.message));
    }
  };

  const handleApproveScript = (id) => {
    api
      .approveScriptItem(id)
      .then(() => {
        setPendingItems({
          ...pendingItems,
          scripts: pendingItems.scripts.filter((s) => s._id !== id),
        });
        alert("Script approved!");
      })
      .catch((err) => alert("Error: " + err.message));
  };

  const handleDeleteScript = (id) => {
    if (window.confirm("Are you sure you want to delete this script?")) {
      api
        .deleteScript(id)
        .then(() => {
          setPendingItems({
            ...pendingItems,
            scripts: pendingItems.scripts.filter((s) => s._id !== id),
          });
          alert("Script deleted!");
        })
        .catch((err) => alert("Error: " + err.message));
    }
  };

  if (loading) {
    return (
      <div className="admin-page">
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="container">
        <h1>Admin Panel</h1>
        <p className="admin-subtitle">Manage content and approvals</p>

        <div className="admin-tabs">
          <button
            className={`tab-btn ${activeTab === "pending" ? "active" : ""}`}
            onClick={() => setActiveTab("pending")}
          >
            Pending Approvals (
            {pendingItems.music.length +
              pendingItems.art.length +
              pendingItems.scripts.length}
            )
          </button>
          <button
            className={`tab-btn ${activeTab === "festivals" ? "active" : ""}`}
            onClick={() => setActiveTab("festivals")}
          >
            Manage Festivals
          </button>
        </div>

        <div className="admin-content">
          {activeTab === "pending" && (
            <div className="pending-approvals">
              <h2>Pending Music Approvals ({pendingItems.music.length})</h2>
              {pendingItems.music.length > 0 ? (
                <div className="approval-list">
                  {pendingItems.music.map((music) => (
                    <div key={music._id} className="approval-item">
                      <div className="item-info">
                        <h3>{music.title}</h3>
                        <p>Artist: {music.artist || "N/A"}</p>
                        <p>Category: {music.category}</p>
                      </div>
                      <div className="item-actions">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleApproveMusic(music._id)}
                        >
                          ✓ Approve
                        </button>
                        <button
                          className="btn btn-outline"
                          onClick={() => handleDeleteMusic(music._id)}
                        >
                          ✕ Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No pending music approvals</p>
              )}

              <h2>Pending Art Approvals ({pendingItems.art.length})</h2>
              {pendingItems.art.length > 0 ? (
                <div className="approval-list">
                  {pendingItems.art.map((art) => (
                    <div key={art._id} className="approval-item">
                      <div className="item-info">
                        <h3>{art.title}</h3>
                        <p>Artist: {art.artist || "N/A"}</p>
                        <p>Category: {art.category}</p>
                      </div>
                      <div className="item-actions">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleApproveArt(art._id)}
                        >
                          ✓ Approve
                        </button>
                        <button
                          className="btn btn-outline"
                          onClick={() => handleDeleteArt(art._id)}
                        >
                          ✕ Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No pending art approvals</p>
              )}

              <h2>Pending Script Approvals ({pendingItems.scripts.length})</h2>
              {pendingItems.scripts.length > 0 ? (
                <div className="approval-list">
                  {pendingItems.scripts.map((script) => (
                    <div key={script._id} className="approval-item">
                      <div className="item-info">
                        <h3>{script.title}</h3>
                        <p>Language: {script.language}</p>
                        <p>Category: {script.category}</p>
                      </div>
                      <div className="item-actions">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleApproveScript(script._id)}
                        >
                          ✓ Approve
                        </button>
                        <button
                          className="btn btn-outline"
                          onClick={() => handleDeleteScript(script._id)}
                        >
                          ✕ Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No pending script approvals</p>
              )}
            </div>
          )}

          {activeTab === "festivals" && (
            <div className="festivals-management">
              <h2>Festivals ({festivals.length})</h2>
              <div className="festivals-list">
                {festivals.map((festival) => (
                  <div key={festival._id} className="festival-item">
                    <h3>{festival.name}</h3>
                    <p>Month: {festival.month}</p>
                    <p>{festival.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
