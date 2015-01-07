<?php

class Question_model extends CI_Model {

    function __construct() {
        parent::__construct();
    }

    function getQuestions() {
        $questions = array();
        $result = $this->db->get('qna_questions');
        foreach ($result->result() as $row) {
            $question = new QuestionDTO();
            $question->setId($row->id);
            $question->setTitle($row->title);
            $question->setDescription($row->description);
            $question->setAnswerCount($row->answerCount);
            $question->setTags($this->getTags($question->getId()));
            $questions[] = $question;
        }


        return $questions;
    }

    function getTags($questionId) {
        $tags = array();
        $this->db->select('qna_tags.id, qna_tags.tag_name');
        //$this->db->select('*');
        $this->db->from('qna_questiontags');
        $this->db->join('qna_tags', 'qna_tags.id = qna_questiontags.tag_id');
        $this->db->where('qna_questiontags.question_id', $questionId);

        $result = $this->db->get();
        foreach ($result->result() as $row) {
            $tag = new TagDTO();
            $tag->setId($row->id);
            $tag->setName($row->tag_name);
            $tags[] = $tag;
        }
        return $tags;
    }

}
