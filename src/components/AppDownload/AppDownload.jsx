import { assets } from "../../assets/assets"
import "./AppDownload.scss"

export default function AppDownload() {
    return (
        <div className="app-download" id="mebile">
            <h2>For Better Experience Download</h2>
            <h2>Tomato App</h2>
            <div className="imgs">
                <a href="https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&pcampaignid=web_share" target="_blank">
                    <img src={assets.play_store} alt="" />
                </a>
                <a href="https://itunes.apple.com/us/app/id123456'" target="_blank">
                    <img src={assets.app_store} alt="" />
                </a>
            </div>
        </div>
    )
}