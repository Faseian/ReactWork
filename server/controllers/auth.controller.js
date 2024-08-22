export const authController = {
    async login(req,res) {
        try {
            const {username, password} = req.query;
            console.log(username);
            console.log(password);
        } catch (error) {
            
        }
    }
}