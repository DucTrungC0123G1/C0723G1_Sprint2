import React from "react";

export default function DashboardManager() {
    return (
        <>
            <div className="main-container d-flex">
                <Sidebar/>
                <div className="content">
                    <HeaderAdmin/>
                    <div className="dashboard-content px-3 py-3">
                    </div>
                </div>
            </div>
        </>
    )

}

