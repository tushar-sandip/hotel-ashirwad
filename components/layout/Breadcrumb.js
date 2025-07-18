import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <div className="page-title" style={{ backgroundImage: "url(assets/images/background/page-title.jpg)" }}>
                <div className="auto-container">
                    <h1>{breadcrumbTitle || "Rooms"}</h1>
                </div>
            </div>
            <div className="bredcrumb-wrap">
                <div className="auto-container">
                    <ul className="bredcrumb-list">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/room">Rooms</Link></li>
                        {breadcrumbTitle && <li>{breadcrumbTitle}</li>}
                    </ul>
                </div>
            </div>
        </>
    )
}
