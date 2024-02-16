import React, { useState } from "react";

const FileExplorer = () => {
  const [isRootFolderOpen, setRootFolderOpen] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [isRenaming, setRenaming] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const [folderName, setFolderName] = useState("Root Folder");

  const toggleRootFolder = () => {
    setRootFolderOpen(!isRootFolderOpen);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleRename = () => {
    setRenaming(true);
  };

  const handleDelete = () => {
    setDeleting(true);
  };

  const handleRenameSubmit = (e) => {
    e.preventDefault();
    setRenaming(false);
  };

  const handleDeleteConfirm = () => {
    setDeleting(false);
    setRootFolderOpen(false); // You can add your delete logic here
  };

  const handleDeleteCancel = () => {
    setDeleting(false);
  };

  return (
    <div
      style={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      <div
        onClick={toggleRootFolder}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "pointer", position: "relative", marginRight: "8px" }}
      >
        {isHovered && !isRenaming && !isDeleting && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
            }}
          >
            <div
              style={{ marginRight: "8px", cursor: "pointer" }}
              onClick={handleRename}
            >
              📝 Rename
            </div>
            <div style={{ cursor: "pointer" }} onClick={handleDelete}>
              🗑️ Delete
            </div>
          </div>
        )}
        {isRenaming ? (
          <form onSubmit={handleRenameSubmit}>
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              autoFocus
            />
          </form>
        ) : (
          <span>{isRootFolderOpen ? "📂" : "📁"}</span>
        )}
        {isDeleting && (
          <div>
            <p>Are you sure you want to delete the root folder?</p>
            <button onClick={handleDeleteConfirm}>Yes</button>
            <button onClick={handleDeleteCancel}>No</button>
          </div>
        )}
      </div>
      {isRootFolderOpen && (
        <ul>
          {/* Add your subfolders or files here */}
          <li>Subfolder 1</li>
          <li>Subfolder 2</li>
          <li>File 1</li>
          <li>File 2</li>
        </ul>
      )}
    </div>
  );
};

export default FileExplorer;
