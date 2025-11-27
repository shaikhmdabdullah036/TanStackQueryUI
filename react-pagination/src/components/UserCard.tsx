import React from "react";
import { User } from "../types/user";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div
      className="card"
      style={{
        padding: "1.5rem",
        borderRadius: "0.5rem",
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.2s ease",
        marginBottom: "1rem",
      }}
    >
      <h3
        style={{
          fontSize: "1.125rem",
          fontWeight: "600",
          marginBottom: "0.5rem",
          color: "#1f2937",
          textTransform: "capitalize",
        }}
      >
        {user.title}
      </h3>
      <p
        style={{
          color: "#4b5563",
          marginBottom: "1rem",
          fontSize: "0.875rem",
          lineHeight: 1.5,
        }}
      >
        {user.body}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.75rem",
          color: "#6b7280",
          paddingTop: "0.75rem",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <span>Post ID: {user.id}</span>
        <span>User ID: {user.userId}</span>
      </div>
    </div>
  );
};
