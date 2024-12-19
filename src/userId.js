export function getOrCreateUserId() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = 'user-' + Date.now() + '-' + Math.floor(Math.random() * 1000000);
        localStorage.setItem('userId', userId);
    }
    return userId;
}