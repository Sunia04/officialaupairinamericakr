import { BlogPost, SiteConfig, Testimonial } from './types';

export const INITIAL_CONFIG: SiteConfig = {
  heroTitle: "미국에서 당신의 꿈을 펼치세요",
  heroSubtitle: "오페어인아메리카와 함께하는 안전하고 신뢰할 수 있는 문화 교류 프로그램.\n당신의 새로운 도전이 여기서 시작됩니다.",
  contactEmail: "aupairinamericakr@naver.com",
  primaryColor: "teal"
};

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "2025년 오페어 프로그램 모집 시작",
    content: "2025년도 오페어 프로그램 모집이 공식적으로 시작되었습니다! \n\n이번 시즌은 특히 뉴욕, 캘리포니아 지역의 호스트 가족들이 많이 등록되어 있습니다. 아이들을 사랑하고 미국 문화를 체험하고 싶은 20대라면 누구나 지원 가능합니다. \n\n자세한 지원 자격과 혜택을 확인해보세요.",
    imageUrl: "https://picsum.photos/seed/aupair1/800/600",
    date: "2024-05-20",
    category: "공지사항",
    author: "관리자"
  },
  {
    id: "2",
    title: "현직 오페어가 말하는 '진짜' 미국 생활",
    content: "안녕하세요! 저는 현재 보스턴에서 6개월째 오페어 생활을 하고 있는 지민입니다. \n\n처음에는 영어 때문에 걱정이 많았지만, 호스트 가족들의 배려로 지금은 현지 대학 수업도 들으며 알차게 보내고 있어요. 주말에는 근교 여행도 다니며 잊지 못할 추억을 만들고 있습니다.",
    imageUrl: "https://picsum.photos/seed/aupair2/800/600",
    date: "2024-05-18",
    category: "오페어 이야기",
    author: "김지민"
  },
  {
    id: "3",
    title: "성공적인 인터뷰를 위한 5가지 팁",
    content: "호스트 가족과의 매칭 인터뷰, 어떻게 준비해야 할까요? \n\n1. 밝은 미소 유지하기 \n2. 아이들과의 경험 구체적으로 말하기 \n3. 자신의 취미 공유하기 \n\n나머지 팁들은 본문에서 확인하세요!",
    imageUrl: "https://picsum.photos/seed/aupair3/800/600",
    date: "2024-05-15",
    category: "정보/팁",
    author: "관리자"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "길*영",
    role: "2025 버지니아 오페어",
    text: "인생에서 가장 빛나는 1년이었습니다. 영어 실력 향상은 물론, 평생 함께할 두 번째 가족을 얻었어요.",
    // ICON 키워드를 넣어 아이콘이 나오도록 설정합니다.
    avatar: "ICON"
  },
  {
    id: "t2",
    name: "이*인",
    role: "2024 워싱턴 오페어",
    text: "처음에는 두려웠지만 오페어인아메리카 직원분들의 오페어에 대한 열정과 지원덕분에 안전하게 마칠 수 있었습니다. 용기내어 도전하세요 !",
    avatar: "https://images.unsplash.com/photo-1485871981535-5be84380f471?auto=format&fit=crop&q=80&w=400&h=400"
  }
];