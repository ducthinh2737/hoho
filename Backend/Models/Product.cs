using System.ComponentModel.DataAnnotations;

namespace ProjectPro.Backend.Models
{
    public class Product
    {
        // Using string Id to match existing 'bang-ron', 'ao-thun-co-tron' IDs
        [Key]
        public string Id { get; set; } = string.Empty; 
        public string Category { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Desc { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        public string Detail { get; set; } = string.Empty;
    }
}
