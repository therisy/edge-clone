export default function ResultCard({ url, title, description }) {
    const toSite = () => {
        window.location = url;
    }

    return (
        <div onClick={toSite} className="w-auto h-auto p-5 cursor-pointer flex-col flex gap-y-1">
            <div>
                <p className="text-sm text-muted">{url}</p>
            </div>
            <div>
                <h1 className="hover:underline">{title}</h1>
            </div>
            <div>
                <p className="text-muted">{description}</p>
            </div>
        </div>
    )
}
