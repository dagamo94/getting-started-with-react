function Notifications (props){
    return props.notifications.length > 0 && (
        <p>You have {props.notifications.length} notifications today!</p>
    )
}

export default Notifications;