import Profile from '../models/Profile.js';

class ProfileController {
  async get(req, res) {
    try {
      const { lang = 'en' } = req.query;
      const profile = await Profile.findOne({ lang });
      if (!profile) return res.status(404).json({ error: 'Profile not found' });
      res.json(profile);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async upsert(req, res) {
    try {
      const { lang } = req.body;
      const profile = await Profile.findOneAndUpdate(
        { lang },
        req.body,
        { new: true, upsert: true, runValidators: true }
      );
      res.json(profile);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new ProfileController();
