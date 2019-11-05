<?php
namespace app\pe\controller;
use think\Request;
use think\Db;


class Index{
	function index()
	{
		
		if($_POST['time']&&$_POST['index'])
		{
		$_POST['group']='一组';
         $sql='SELECT * FROM pe WHERE `group`='.'"'.$_POST['index'].'"'.'and `time`='.'"'.$_POST['time'].'"';
	//print_r($sql);
		$query=Db::connect('mysql://root:@127.0.0.1:3306/content#utf8')->query($sql);

	   $json_arr = json_encode($query,JSON_UNESCAPED_UNICODE);
        print_r($json_arr);
		}
		else
			print_r("fail");
	 }
	 
	 function add()
	{
           
		 $sql='update  pe set '.$_POST['test'].'='.'"'.$_POST['mark'].'"'.", username=".'"'.$_POST['username'].'"'.' where schoolnum='."'".$_POST['schoolnum']."'";
		
		$query=Db::connect('mysql://root:@127.0.0.1:3306/content#utf8')->query($sql);    
	 }
	  function login()
	{
      $sql='select password from teacher where username='."'".$_POST['username']."'";
	 
		$query=Db::connect('mysql://root:@127.0.0.1:3306/content#utf8')->query($sql);    
	
		   if($query[0]['password']==$_POST['password'])
			   echo 'success';
		   else
			   echo 'fail';
	 }
	 function weice()
	 {
		 if(!$_POST['test'])
		 {
			 echo 'fail';
			 die();
		 }
		 
		     $sql='update  pe set '.$_POST['test'].'='.'"'."未测".'"'.", username=".'"'.$_POST['username'].'"'.' where schoolnum='."'".$_POST['schoolnum']."'";
		 print_r($sql);
		$query=Db::connect('mysql://root:@127.0.0.1:3306/content#utf8')->query($sql);    
	
	 }
 function zuobi()
	 {
		 
		  if(!$_POST['test'])
		 {
			 echo 'fail';
			die();
		 }
		 
		  $sql='update  pe set '.$_POST['test'].'='.'"'."作弊".'"'.", username=".'"'.$_POST['username'].'"'.' where schoolnum='."'".$_POST['schoolnum']."'";
		    print_r($sql);
		$query=Db::connect('mysql://root:@127.0.0.1:3306/content#utf8')->query($sql);    
		
	 }
function search()
{
	 //echo 'das';
	  $sql='select distinct name,schoolnum,'.$_POST['id'].' marks'." from pe where username=".'"'.$_POST['username'].'"';
	//	print_r($sql);
		$query=Db::connect('mysql://root:@127.0.0.1:3306/content#utf8')->query($sql);    
       
$json_arr = json_encode($query,JSON_UNESCAPED_UNICODE);
		print_r(urldecode($json_arr));
}
	 
	 
	 
	
	     }
		
