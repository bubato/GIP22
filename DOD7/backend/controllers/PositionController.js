import Position from "../models/PositionModel.js";
import User from "../models/UserModel.js";

export const getPositions = async (req, res) => {
    try {
        const positions = await Position.find();
        res.json(positions);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getPositionById = async (req, res) => {
    try {
        const position = await Position.findById(req.params.id);
        res.json(position);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const savePosition = async (req, res) => {
    const position = new Position(req.body);
    try {
        const insertedPosition = await position.save();
        res.status(201).json(insertedPosition);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updatePosition = async (req, res) => {
    try {
        const updatedPosition = await Position.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedPosition);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deletePosition = async (req, res) => {
    try {
        const filter = { position: req.params.id };
        const updateBody = {
            $set: {
                position: null
            },
        };
        await User.deleteMany (filter, updateBody);
        const deletedPosition = await Position.deleteOne({_id:req.params.id});
        res.status(200).json(deletedPosition);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}