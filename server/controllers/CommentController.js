import CommentModel from "../modules/Comment.js";


export const getAll = async (req,res) => {
    try {
        const comments = await CommentModel.find().populate('user').exec();

        res.json(comments);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось get comments',
        });
    }
}

export const create = async (req, res) => {
    try {
        const doc = new CommentModel({
            coment: req.body.coment,
            user: req.userId,
        }); 

        const comment = await doc.save();

        res.json(comment);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось create comment',
        });
    }
}