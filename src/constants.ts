export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  bgColor: string;
  description: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  specs: { icon: string; label: string; sub: string }[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'nova-runner',
    name: 'Nova Runner',
    category: "Men's Running",
    price: 145,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvLdk7HMLRTlPvN4MYN7MGKhXBEUVslrFWHEtleDp86O0eMiapeyZ7LFkJlUVBQwEGu3RhQbywZ6cRPQZ4EExUzbeBzaYh7RKNDg1J9vxnqvuRawLDLr-myRgsHpClpCRFPB9eTXZQY6GTqqEcINSH8JAfdwH0XRmgjG8ypHgDUU7lLbCO1dDbTbgvKmxYXAUCUYYs9KACnGC2komJfQ5XmrGrOjQqXYbZOQRPLmn7xjHbQHF2Xjg8IP8ZZpkw_x08F6Kyh5bLTlg',
    bgColor: 'bg-pastel-blue',
    description: 'Experience the future of comfort with our lightest running shoe yet. Engineered for daily miles and recovery runs.',
    colors: [
      { name: 'Crimson Red', hex: '#dc2626' },
      { name: 'Midnight Navy', hex: '#0f172a' },
      { name: 'Pure White', hex: '#ffffff' },
      { name: 'Electric Blue', hex: '#3b82f6' },
    ],
    sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
    specs: [
      { icon: 'Wind', label: 'Breathable', sub: 'AeroMesh™' },
      { icon: 'RefreshCw', label: 'Sustainable', sub: 'Recycled Rubber' },
      { icon: 'Cloud', label: 'Cushion', sub: 'CloudFoam' },
    ]
  },
  {
    id: 'velocity-knit-ii',
    name: 'Velocity Knit II',
    category: 'PERFORMANCE RUNNING',
    price: 140,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACGZnOFoIFJxMU5r94QFKSJXstQlGxuc4iMnD6bai-kkR6o2I2PEw_BVxilHU111PskaCGmZuyEEQ3MtnSeRSyUbSEyY_WhNlZcJCJciVhqR9_sWZqE66BHLTOO1-0-FKm2j3RRIC4_J0hANWrBekPQ7lXJXMgfoDJx-NwsLD6xlA4PhjfXOqcMQkgX3P6Q9V9QRNtUpaJngtUYvjQR3pm5msxyVyhqzHL2aEW2P2PZ2He6cSxebic9g-a1O6s8K2BZNU-bmiR6lw',
    bgColor: 'bg-[#e0f2fe]',
    description: 'Ultra-responsive knit upper with carbon-fiber plate for maximum energy return.',
    colors: [],
    sizes: [],
    specs: []
  },
  {
    id: 'terra-stride',
    name: 'Terra Stride',
    category: 'LIFESTYLE',
    price: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAqBA6dPrJ_H95aCO_oR-0PU_75xrH-FjiuE1J_oUgV4bxlFyc0ELSeMCom6dGfMmBMqwsdBmqNyT84R-MrLl2JdiQDizlcOUXXL4C-384Cz2CX0Fb5jYYXWFBm4WVgiaf5NpmarHcfQJj8lQg2-oNxwllradN-AFJuYFearml_cI5su5UAWLP4Ln2DJlE0oGFGuOjMGg1eJxo8eqH7d-4dfkref98GiopaUY3pjPip7hHef9dfjKDNcg2y2hBUadU1cK32g-nzAk',
    bgColor: 'bg-[#dcfce7]',
    description: 'Eco-friendly materials meet classic silhouette for everyday exploration.',
    colors: [],
    sizes: [],
    specs: []
  },
  {
    id: 'cloud-apex',
    name: 'Cloud Apex',
    category: 'LIFESTYLE',
    price: 150,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1hMuhvsnr_TVvWeWFsJtPQggiWY0rGIFZMUOFSgB4fagABXtih4F1rpekIfRhhLYMMyW4gPkgCGXEwbWL89kLw-XveFDHyJXMTFDROIeMBZ7bVTLfqaTYcL6kXplifgm7hK9Oz_5hvprTP-R7lEe5B-yfjhF-0lP5K76INCI12zbd9rMF0fWjAmheLePY0UqptszcwJ4npJaZqVrvlp-cS0xGZ5mPl-qkd0_rK44UNldsgnIoUkDrECiNlsN5jN4EZSWyYVkDQu4',
    bgColor: 'bg-[#f3e8ff]',
    description: 'Chunky aesthetic with cloud-like cushioning for all-day comfort.',
    colors: [],
    sizes: [],
    specs: []
  },
  {
    id: 'solar-boost',
    name: 'Solar Boost',
    category: 'LIMITED EDITION',
    price: 180,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5ExExFfJovV54gXWFGFMfPS-NX-Z5GiGp6f8cFZNqNFLcPBUkmTa-WgJbxFl98fnU3s1ktQXHtIk1QhHJjCCGTXR4dCozPrcCqS8r8rkLNyxY1Y4sG-0zp9pXRGSTq-NAvc8nA_E9nyPQ1MX5Qe7PlfNhuQrBeB27F8YiKmGJKlp7nOaDb-xQbXOHjonuWgqGhyWxQ0-vuymRGCha1AsuiW74tv_b5R3CbIvzEZO-v01BuQOes2eFAPggerxKitOsMO1EZ5hwD5Q',
    bgColor: 'bg-[#ffedd5]',
    description: 'Vibrant high-top design for those who want to stand out.',
    colors: [],
    sizes: [],
    specs: []
  },
  {
    id: 'shadow-run',
    name: 'Shadow Run',
    category: 'PERFORMANCE',
    price: 130,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDavurX-VMSct2l3URrdVeqsmiE9X0PEtspU14HIfy6jItPGT4IajbwEqIR_wWnihd18QM9ELjw-rP6Ae4vPrgH1g4P9e-H_dKCaSynP9xwgRafc7CY1_bR7LWa9LLdcsxQqdqss5Shc3JmPrMoMpEKpjdT_SmNlo3fiJNmOadpfCr_zvUCpaw_oGKCrqpFsEU8yuokKCj1Lsps4dLwkWvLxt_UuPIZWvAvDJdIpIYYjfis6I4LrPdyDrKj50jC9FNzTxGX6k2tlOg',
    bgColor: 'bg-[#f3f4f6]',
    description: 'Stealthy performance with high-traction outsole.',
    colors: [],
    sizes: [],
    specs: []
  },
  {
    id: 'rose-glide',
    name: 'Rose Glide',
    category: 'LIFESTYLE',
    price: 135,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo-3fowp7qWT6de2sE_q5aoZ5theAoX-1nBTnD_o0XMzIMgjlzIrdzsjjVDwzVMbUDGrxX5rpLlcQcv-_wj-OuFaLoTrU-669h6aGejg8b9iZWo-wiYp98e4muyeubIqwZhIZbKpFlDfNkR83FJi76jP31TQxlS9SfKznvrgPzMCEW3mOzgGZGqAk9V_iA4a7iPXjBton6pZJdU7AFpM1XcOhMDefmD3iBdNj9Sia5wiqC35M8lr-XiPlKl5HNVLteprVNPwjDn60',
    bgColor: 'bg-[#fce7f3]',
    description: 'Elegant pink hues combined with athletic performance.',
    colors: [],
    sizes: [],
    specs: []
  }
];
