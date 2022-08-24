<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@page import="com.google.gson.Gson"%>
<%@page import="com.google.gson.GsonBuilder"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>

<%
		//ctrl + space : jsp 내장객체
	String user_id = request.getParameter("user_id");
	String user_passowrd = request.getParameter("user_passowrd");
	String user_name = request.getParameter("user_name");
	String user_email = request.getParameter("user_email");
	
	System.out.println("user_id: " + user_id);
	System.out.println("user_passowrd: " + user_passowrd);
	System.out.println("user_name: " + user_name);
	System.out.println("user_email: " + user_email);
	
	Map<String, String> user = new HashMap<String, String>();
	user.put("user_id", user_id);
	user.put("user_passowrd", user_passowrd);
	user.put("user_name", user_name);
	user.put("user_email", user_email);
	
	response.setContentType("application/json; charset=utf-8");
	
	Gson gson = new GsonBuilder().setPrettyPrinting().create();
	
		
	out.print(gson.toJson(user));
	

%>
