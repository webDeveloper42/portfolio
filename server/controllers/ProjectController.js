import Project from '../models/Project.js';

class ProjectController {
  async getAll(req, res) {
    try {
      const { lang = 'en' } = req.query;
      const projects = await Project.find({ lang }).sort({ order: 1, createdAt: 1 });
      res.json(projects);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const project = new Project(req.body);
      await project.save();
      res.status(201).json(project);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const project = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!project) return res.status(404).json({ error: 'Project not found' });
      res.json(project);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async remove(req, res) {
    try {
      const project = await Project.findByIdAndDelete(req.params.id);
      if (!project) return res.status(404).json({ error: 'Project not found' });
      res.json({ deleted: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default new ProjectController();
