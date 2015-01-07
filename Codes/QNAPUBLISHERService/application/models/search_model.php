<?php

class Search_model extends CI_Model {

    function __construct() {
        parent::__construct();
        $this->load->model('question_model');
    }

    function doSearch($searchTerm) {

        return $this->findByTitle($searchTerm);
    }

    function findByTitle($keyWord) {
        $searchResults = array();
        $this->db->like('title', $keyWord, 'both');
        $result = $this->db->get('qna_questions');
        foreach ($result->result() as $row) {
            $question = new QuestionDTO();
            $question->setId($row->id);
            $question->setTitle($row->title);
            $question->setDescription($row->description);
            $question->setAnswerCount($row->answerCount);
            $question->setTags($this->question_model->getTags($question->getId()));
            $searchResults[] = $question;
        }

        return $searchResults;
    }

    function findByTags() {
        
    }

    function findByContent() {
        
    }

}
