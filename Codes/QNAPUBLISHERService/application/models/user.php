<?php

class User extends CI_Model {

    function __construct() {
        parent::__construct();
        //$this->load->library('Test');
    }

    function getUserDetails() {
        $name = "lahiru";
        $test = new Test();
        $test->setUserName($name);

        return $test;
    }

    function insertUser($test) {
        var_dump($test->getPassword());
    }

}
