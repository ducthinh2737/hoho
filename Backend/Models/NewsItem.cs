using System.ComponentModel.DataAnnotations;

namespace ProjectPro.Backend.Models
{
    public class NewsItem
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Desc { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty; // Keeping as string for simplicity to match JS, or could parse to DateTime
        public string Category { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
    }
}
