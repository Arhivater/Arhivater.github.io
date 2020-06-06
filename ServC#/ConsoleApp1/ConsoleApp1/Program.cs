using System;
using System.Net;
using System.Net.Http;
using System.IO;
using System.Threading.Tasks;
using System.Data.SqlTypes;
using System.Data.SqlClient;
using System.Web;
//using System.Data.SqlClient;

namespace server
{
    class Program
    {
        private static async Task Listen()
        {

            HttpListener listener = new HttpListener();
            listener.Prefixes.Add("http://localhost:8888/");
            listener.Start();
            Console.WriteLine("Ожидание запроса на вход...");

            while (true)
            {
                string send = "";
                string responseString = "";
                HttpListenerContext context = await listener.GetContextAsync();
                HttpListenerRequest request = context.Request;
                HttpListenerResponse response = context.Response;
                response.Headers.Add("Access-Control-Allow-Origin", "*");

                if (request.HttpMethod == "POST")
                {
                    if (!request.HasEntityBody)
                    {
                        Console.WriteLine("No client data was sent with the request.");
                    }
                    System.IO.Stream body = request.InputStream;
                    System.Text.Encoding encoding = request.ContentEncoding;
                    System.IO.StreamReader reader = new System.IO.StreamReader(body, encoding);
                    if (request.ContentType != null)
                    {
                        Console.WriteLine("Client data content type {0}", request.ContentType);
                    }
                    Console.WriteLine("Client data content length {0}", request.ContentLength64);
                    send = reader.ReadToEnd();
                    Console.WriteLine("Полученные данные логина и пороля: " + send);
                    if (send == "admin_admin")
                    {
                        responseString = "true";
                    }
                    else { responseString = "false"; }




                }
                Console.WriteLine("Отвечено");
                byte[] buffer = System.Text.Encoding.UTF8.GetBytes(responseString);
                response.ContentLength64 = buffer.Length;
                Stream output = response.OutputStream;
                output.Write(buffer, 0, buffer.Length);
                output.Close();
            }
        }
        static async Task Main(string[] args)
        {
            //using (SqlConnection conn = new SqlConnection(connString))
            //{
            //    string sqlcomm = "'select * from [dbo].[Table]'";
            //    // conn.Open(); // открыть соединение 
            //    SqlCommand command = new SqlCommand(sqlcomm, conn);
            //    command.Connection.Open();
            //    //command.ExecuteNonQuery();
            //    SqlDataReader Reader = command.ExecuteReader();
            //}
            await Listen();
        }
    }
}
