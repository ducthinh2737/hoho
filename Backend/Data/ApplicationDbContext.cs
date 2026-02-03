using Microsoft.EntityFrameworkCore;
using ProjectPro.Backend.Models;

namespace ProjectPro.Backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<NewsItem> NewsItems { get; set; }
        public DbSet<Product> Products { get; set; }
    }
}
