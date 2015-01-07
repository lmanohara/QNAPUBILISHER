<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Question
 *
 * @author Lahiru
 */
class QuestionDTO {

    //put your code here

    public $id;
    public $title;
    public $topic;
    public $description;
    public $tags;
    public $answerCount;

    function __construct() {
        
    }

    function setId($id) {
        $this->id = $id;
    }

    function setTitle($title) {
        $this->title = $title;
    }

    function setTopic($topic) {
        $this->topic = $topic;
    }

    function setDescription($description) {
        $this->description = $description;
    }

    function getTags() {
        return $this->tags;
    }

    function setTags($tags) {
        $this->tags = $tags;
    }

    function setAnswerCount($answerCount) {
        $this->answerCount = $answerCount;
    }

    function getId() {
        return $this->id;
    }

    function getTitle() {
        return $this->title;
    }

    function getTopic() {
        return $this->topic;
    }

    function getDescription() {
        return $this->description;
    }

    function getAnswerCount() {
        return $this->answerCount;
    }

}
