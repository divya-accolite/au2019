package com.accolite.au.java;

import java.io.FileNotFoundException;

import java.io.FileOutputStream;

import javax.xml.parsers.DocumentBuilder;

import javax.xml.parsers.DocumentBuilderFactory;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Result;

import javax.xml.transform.Source;

import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;

import javax.xml.transform.TransformerException;

import javax.xml.transform.TransformerFactory;

import javax.xml.transform.dom.DOMSource;

import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;

import org.w3c.dom.Element;

public class TestAnnot {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		UseAnnot test = new UseAnnot();
		UseAnnotTwo testtwo = new UseAnnotTwo();

		Servlet s = test.getClass().getAnnotation(Servlet.class);
		;
		Servlet s1 = testtwo.getClass().getAnnotation(Servlet.class);

		System.out.println(s.servletName() + " " + s.urlPattern() + "   " + test.getClass());
		System.out.println(s1.servletName() + "  " + s1.urlPattern() + "   " + testtwo.getClass());

		try {
			DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
			DocumentBuilder builder = factory.newDocumentBuilder();

			Document doc = builder.newDocument();

			Element root = doc.createElement("Servlet");
			doc.appendChild(root);

			Element servletName = doc.createElement("ServletName");
			servletName.appendChild(doc.createTextNode(s.servletName().toString()));
			root.appendChild(servletName);

			Element url = doc.createElement("UrlPattern");
			url.appendChild(doc.createTextNode(s.urlPattern().toString()));
			root.appendChild(url);

			Element cls = doc.createElement("Class");
			cls.appendChild(doc.createTextNode(test.getClass().toString()));
			root.appendChild(cls);

			Element servletName1 = doc.createElement("ServletName");
			servletName1.appendChild(doc.createTextNode(s1.servletName().toString()));
			root.appendChild(servletName1);

			Element url1 = doc.createElement("UrlPattern");
			url1.appendChild(doc.createTextNode(s1.urlPattern().toString()));
			root.appendChild(url1);

			Element cls1 = doc.createElement("Class");
			cls1.appendChild(doc.createTextNode(testtwo.getClass().toString()));
			root.appendChild(cls1);

			TransformerFactory tFactory = TransformerFactory.newInstance();

			Transformer transformer = tFactory.newTransformer();

			transformer.setOutputProperty(OutputKeys.INDENT, "yes");

			transformer.setOutputProperty("{http://xml.apache.org/xslt}indent-amount", "4");

			Source sou = new DOMSource(doc);

			Result res = new StreamResult(new FileOutputStream("testFile.xml"));

			transformer.transform(sou, res);

			System.out.println("XML File Created Succesfully");

		} catch (ParserConfigurationException pce) {
			pce.printStackTrace();
		} catch (TransformerConfigurationException e)

		{

			e.printStackTrace();

		} catch (FileNotFoundException e) {

			e.printStackTrace();

		} catch (TransformerException e) {

			e.printStackTrace();

		}

	}

}
