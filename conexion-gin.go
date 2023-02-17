package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	// Set the router as the default one shipped with Gin
	router := gin.Default()

	router.LoadHTMLFiles("x.html")
	router.GET("/auth/login", func(c *gin.Context) {
		c.HTML(http.StatusOK, "x.html", nil)
	})

	// Start and run the server
	router.Run(":3000")
}
