import Document from "../models/DocumentModel.js";
import User from "../models/UserModel.js";

export const getDocuments = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const pageSize = req.query.pageSize || 10;
        const pageIndex = req.query.pageIndex || 1;
        const documents = 
            await Document.find({fullName: { $regex: '.*' + keyword + '.*' } })
            .limit(pageSize)
            .skip((pageIndex - 1) * pageSize)
        res.json(documents);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getDocumentById = async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);
        res.json(document);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveDocument = async (req, res) => {
    const document = new Document(req.body);
    try {
        const insertedDocument = await document.save();
        res.status(201).json(insertedDocument);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateDocument = async (req, res) => {
    try {
        const updatedDocument = await Document.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedDocument);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteDocument = async (req, res) => {
    try {
        const deletedDocument = await Document.deleteOne({_id:req.params.id});
        res.status(200).json(deletedDocument);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}