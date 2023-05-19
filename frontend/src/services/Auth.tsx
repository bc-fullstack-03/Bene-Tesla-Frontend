function getAutheader() {
    const token = localStorage.getItem('accessToken');

    const autheader = {
        headers: {
            Authorization: `Bearer ${token}`
        }
        
    }
    return autheader;
}


export {getAutheader}