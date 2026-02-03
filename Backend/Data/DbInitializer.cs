using ProjectPro.Backend.Models;

namespace ProjectPro.Backend.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            context.Database.EnsureCreated();

            // Look for any products.
            if (context.Products.Any())
            {
                return;   // DB has been seeded
            }

            var products = new Product[]
            {
                new Product { Id = "bang-ron", Category = "ads", Title = "Băng Rôn Quảng Cáo", Desc = "In ấn băng rôn sắc nét trên chất liệu bạt Hiflex bền bỉ, chịu nắng mưa tốt.", Image = "https://shop.aothunxuxu.com/assets/img/bang-ron-min.jpg", Detail = "Băng rôn là hình thức quảng cáo ngoài trời phổ biến..." },
                new Product { Id = "poster", Category = "ads", Title = "Poster & Tem Nhãn", Desc = "Tem nhãn decal sữa, decal trong suốt chất lượng cao, cắt bế thành phẩm.", Image = "https://shop.aothunxuxu.com/assets/img/tem-nhan-min.jpg", Detail = "Poster và tem nhãn giúp nhận diện thương hiệu..." },
                new Product { Id = "ao-thun-co-tron", Category = "uniform", Title = "Áo Thun Cổ Tròn", Desc = "Chất liệu Cotton 100% hoặc 65/35 thấm hút mồ hôi. Phù hợp sự kiện, team building, đồng phục nhóm.", Image = "https://shop.aothunxuxu.com/assets/img/ao-thun-co-tron-min.jpg", Detail = "Áo thun cổ tròn năng động, trẻ trung..." },
                // Add more sample data as needed
            };

            foreach (var p in products)
            {
                context.Products.Add(p);
            }

            var news = new NewsItem[]
            {
                new NewsItem { Title = "Xu hướng đồng phục 2024", Desc = "Khám phá xu hướng mới...", Content = "<p>Nội dung...</p>", Image = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1", Date = "24 Th1, 2024", Category = "Xu Hướng", Author = "Admin" }
            };

            foreach (var n in news)
            {
                context.NewsItems.Add(n);
            }

            context.SaveChanges();
        }
    }
}
