const express = require("express");
const Note = require("../models/notes");

const getAllNotes = async (req, res) => {
  try {
    const allNotes = await Note.find({});
    if (allNotes?.length > 0) {
      res.status(200).json({
        success: true,
        data: allNotes,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No book found",
      });
    }
  } catch (error) {
    console.error("An error occured", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const getSingleNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const currentNote = await Note.findById(noteId);

    if (!currentNote) {
      res.status(404).json({
        success: false,
        message: "Note found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Note found successfully",
        data: currentNote,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
};

const addNote = async (req, res) => {
  const noteFormData = req.body;
  const newlyAddedNote = await Note.create(noteFormData);
  if (noteFormData) {
    try {
      res.status(201).json({
        success: true,
        message: "Note added successfully",
        data: newlyAddedNote,
      });
    } catch (error) {
      console.error("An error occured", error);
      res.status(500).json({
        success: false,
        message: "Something went wrong! Please try again",
      });
    }
  }
};

const EditNote = async (req, res) => {};

const deleteNote = async (req, res) => {};

module.exports = [getAllNotes, getSingleNote, addNote, EditNote, deleteNote];
