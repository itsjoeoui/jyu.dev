package main

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

type Post struct {
	Data    time.Time `json:"date"`
	Content string    `json:"content"`
	ID      uint32    `json:"id"`
}

func main() {
	r := gin.Default()

	posts := []Post{
		{
			ID:      0,
			Content: "Hello World",
			Data:    time.Now(),
		},
		{
			ID:      1,
			Content: "What time is it?",
			Data:    time.Now(),
		},
		{
			ID:      2,
			Content: "All pointers should come first to optimze GC.",
			Data:    time.Now(),
		},
	}

	r.GET("/api/posts", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"data": posts,
		})
	})

	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
