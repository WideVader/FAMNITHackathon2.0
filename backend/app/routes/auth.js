const express = require('express');
const router = express.Router();

// router.use('/auth', authRouter);


router.get('/api/users/', async (req, res) => {
    try {
        const result = await User.find();
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/api/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user)
            res.status(404).json({ error: "User not found." });
        else
            res.json({ user });
        // res.json({user})
    } catch (error) {
        res.status(500).json({ error: "Something went wrong." });
    }
})

router.put('/api/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndReplace({ _id: id }, req.body, { new: true });
        res.json({ user });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong." });
    }
})

router.patch('/api/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.json({ user });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong." });
    }
})

router.delete('/api/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await User.deleteOne({ _id: id });
        res.json({ deletedCount: result.deletedCount });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong." });
    }
})

router.post('/api/users/new', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.get('/api/roles/', async (req, res) => {
    const result = await Role.find();
    res.send(result);
})

module.exports = router;