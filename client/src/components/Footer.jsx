import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-10 px-6 rounded-t-[20px] mt-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 max-md:text-center">
        {/* Giới thiệu */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Về chúng tôi</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Giới thiệu về nền tảng
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Đối tác & Nhà tuyển dụng
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Điều khoản sử dụng
              </a>
            </li>
          </ul>
        </div>

        {/* Hỗ trợ sinh viên */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Hỗ trợ sinh viên</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Hướng dẫn học tập
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Câu hỏi thường gặp (FAQ)
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Đăng ký khóa học
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hỗ trợ tài chính
              </a>
            </li>
          </ul>
        </div>

        {/* Cơ hội thực tập */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Cơ hội thực tập</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Việc làm cho sinh viên
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chương trình thực tập
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kết nối nhà tuyển dụng
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chứng nhận khóa học
              </a>
            </li>
          </ul>
        </div>

        {/* Liên hệ & Mạng xã hội */}
        <div>
          <h3 className="text-lg font-semibold mb-3 ">Liên hệ</h3>
          <p className="text-sm mb-2">
            Nếu bạn có câu hỏi, hãy liên hệ với chúng tôi:
          </p>
          <p className="text-sm">Email: support@educationhub.com</p>
          <p className="text-sm mb-4">Hotline: +84 987 654 321</p>
          <div className="flex space-x-4 text-2xl max-md:justify-center">
            <a href="#" className="hover:text-cyan-500">
              <Facebook />
            </a>
            <a href="#" className="hover:text-cyan-500">
              <Instagram />
            </a>
            <a href="#" className="hover:text-cyan-500">
              <Youtube />
            </a>
            <a href="#" className="hover:text-cyan-500">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bản quyền & Liên kết */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>© 2025 EducationHub. Học tập - Thực tập - Việc làm.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#" className="hover:underline">
            Điều khoản
          </a>
          <a href="#" className="hover:underline">
            Chính sách bảo mật
          </a>
          <a href="#" className="hover:underline">
            Hỗ trợ
          </a>
          <a href="#" className="hover:underline">
            Liên hệ
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
