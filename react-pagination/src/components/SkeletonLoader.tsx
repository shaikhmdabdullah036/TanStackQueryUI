import React from "react";

export const SkeletonLoader: React.FC<{ count?: number }> = ({ count = 1 }) => {
  return (
    <div className="grid">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            style={{
              padding: "1.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "white",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.2s ease",
              marginBottom: "1rem",
              minHeight: "170px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="skeleton"
              style={{
                height: "1.5rem",
                width: "80%",
                marginBottom: "1rem",
                borderRadius: "0.25rem",
              }}
            />

            <div style={{ marginBottom: "1rem", width: "100%" }}>
              <div
                className="skeleton"
                style={{
                  height: "0.875rem",
                  width: "100%",
                  marginBottom: "0.5rem",
                  borderRadius: "0.25rem",
                }}
              />
              <div
                className="skeleton"
                style={{
                  height: "0.875rem",
                  width: "95%",
                  marginBottom: "0.5rem",
                  borderRadius: "0.25rem",
                }}
              />
              <div
                className="skeleton"
                style={{
                  height: "0.875rem",
                  width: "90%",
                  borderRadius: "0.25rem",
                }}
              />
            </div>

            <div style={{ flex: 1 }} />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "0.75rem",
                borderTop: "1px solid #e5e7eb",
                marginTop: "auto",
              }}
            >
              <div
                className="skeleton"
                style={{
                  height: "0.75rem",
                  width: "60px",
                  borderRadius: "0.25rem",
                }}
              />
              <div
                className="skeleton"
                style={{
                  height: "0.75rem",
                  width: "80px",
                  borderRadius: "0.25rem",
                }}
              />
            </div>
          </div>
        ))}
    </div>
  );
};
