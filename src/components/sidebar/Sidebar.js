import "./sidebar.css"
import {HiUser} from 'react-icons/hi'


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarTop">
            <div className="sidebarTopIcon"><HiUser/></div>
            <div className="sidebarTopText">Login & SignUp</div>
            <div className="sidebarTopLogo"><img src="/assests/Logo.jpg" alt="" className="sidebarTopLogoImg"/></div>
        </div>
        <div className="sidebarBottom">
            <div>Subscription Zone</div><hr />
            <div>All Categories</div>
            <div>Trending Websites</div>
            <div>More On Workless</div><hr />
            <div>Choose Language</div><hr />
            <div>My Orders</div>
            <div>My Cart</div>
            <div>My Wishlists</div>
            <div>My Account</div>
            <div>My Notifications</div><hr />
            <div>Notification Preferences</div>
            <div>Help Center</div>
            <div>Legal</div>
        </div>
    </div>
  )
}
