<?php

namespace App\Utilities;

/**==============================================
 * ?                    ABOUT
 * @author      : Newton Mitro
 * @email       : newtonmitro@gmail.com
 * @repo        :
 * @createdOn      :  08 Oct 2023
 * @description     :
 *=============================================**/

class LinkObject
{
    public $rel;
    public $label;
    public $url;
    public $method;
    public $icon;

    function __construct($rel, $label, $url, $method, $icon = null)
    {
        $this->rel = $rel;
        $this->label = $label;
        $this->url = $url;
        $this->method = $method;
        $this->icon = $icon;
    }
}