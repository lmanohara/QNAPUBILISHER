<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Search extends CI_Controller {

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     * 		http://example.com/index.php/welcome
     * 	- or -  
     * 		http://example.com/index.php/welcome/index
     * 	- or -
     * Since this controller is set as the default controller in 
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see http://codeigniter.com/user_guide/general/urls.html
     */
    function __construct() {
        parent::__construct();
        $this->load->model('search_model');
    }

    /**
     * remap function override for restapi 
     */
    public function _remap() {
        $requestMethod = $this->input->server('REQUEST_METHOD');

        switch (strtolower($requestMethod)) {
            case 'get':
                $this->get();
                break;
            case 'post':
                $this->post();
                break;
            case 'put':
                $this->put();
                break;
            case 'delete':
                $this->delete();
                break;
        }
    }

    /**
     * for handdle get request
     */
    public function get() {
        $arguments = $this->uri->uri_to_assoc(2);
        switch ($arguments['resource']) {
            case 'all':
                $this->doSearch($arguments['term']);
                break;
            case 'question':
                break;
        }
    }

    /**
     * for handdle post request
     */
    public function post() {
        
    }

    /**
     * for handdle put request
     */
    public function put() {
        
    }

    /**
     * for handdle delete request
     */
    public function delete() {
        
    }

    function doSearch($term) {
        $searchResult = $this->search_model->doSearch($term);
        $this->output->set_content_type('application/json');
        $this->output->set_output(json_encode($searchResult));
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */