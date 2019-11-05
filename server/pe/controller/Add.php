<?php
namespace app\pe\controller;
use think\Request;
use think\Db;


class Add{
	function index()
	{
	
             $sql='update  pe set '.$_POST['test'].'='."'".$_POST['mark']."'" .' where schoolnum='."'".$_POST['schoolnum']."'";
		 
		$query=Db::connect('mysql://root:@127.0.0.1:3306/content#utf8')->query($sql);
              

	 }

	 
	 
	 
	
	     }
		
