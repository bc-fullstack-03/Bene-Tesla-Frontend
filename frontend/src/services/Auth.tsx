function getAutheader() {
    const token = localStorage.getItem('accessToken');

    const autheader = {
        headers: {
            Authorization: `Bearer ${token}`
        }
        
    }
    return autheader;
}
function getProfile() {
    const profile = localStorage.getItem('profile') as string;
    return profile;
}
function getUser(): string {
    const user = localStorage.getItem('user') as string;
    return user;
}

export { getAutheader, getProfile,  getUser };
