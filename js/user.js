function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	console.log(profile.getId());
}

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function() {
		console.log("user signed out");
	});
}
