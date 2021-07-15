function authenticate() {
    let metabaseID = window.localStorage.getItem("metabase_id");
    // console.log("herer")
    if (metabaseID === null)window.open("admin-login-page", "_self");
}

export default authenticate;