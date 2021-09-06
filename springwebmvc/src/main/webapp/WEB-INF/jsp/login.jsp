<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<html>
    <body>
        <h1 id="banner">Login to Security Demo</h1> 
        <form name="form" action="login" method="POST">
        	<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
            <table>
                <tr>
                    <td>Username:</td>
                    <td><input type='text' name='username' /></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type='password' name='password'></td>
                </tr>
                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan='2'><input name="submit" type="submit">&nbsp;<input name="reset" type="reset"/></td>
                </tr>
            </table>
        </form>
        <a href="signup"><span>signup</span></a>
    </body>
</html>