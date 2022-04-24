
package Recursos;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 *
 * @author 52552
 */
@MultipartConfig
public class imagen extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        try {
            
            Connection con = null;
            Statement set = null;
            ResultSet re= null;
            
            int id_img=0;

            String username, url, password, driver;
            url = "jdbc:mysql://localhost/mydb";
            username = "root";
            password = "n0m3l0";
            driver = "com.mysql.jdbc.Driver";
            
            Class.forName(driver);
            con = DriverManager.getConnection(url,username,password);
            
            try{

                set = con.createStatement();
                
                String q = "select * from mimg;";
                re = set.executeQuery(q);
                
                while(re.next()){
                
                    id_img = re.getInt("id_img");
                
                }
                
                id_img++;
                
                
            
            String i = "..\\105Examen\\Examen\\web\\ImgAlumno\\img"+id_img+".jpg";
            
            Part archvio = request.getPart("archivo");
            InputStream is = archvio.getInputStream();
            File ac = new File(i);
            OutputStream outputStream = new FileOutputStream(ac);
            byte[] buffer = new byte[1024];
            int length;
            while ((length = is.read(buffer)) > 0) {
                outputStream.write(buffer, 0, length);
            }
            is.close();
            outputStream.close();
            System.out.println("Archivo copiado.");
            
            } catch (SQLException e){
            
                System.out.println("Error al conectar la base de datos");
                System.out.println(e.getMessage());
            
            }
                    
        } catch (Exception e) {
            
            System.out.println("Error");
            System.out.println(e.getMessage());
            
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
