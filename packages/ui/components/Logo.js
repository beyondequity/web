import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import { cn } from '@hanzo/ui/util';
const Logo = ({ href = '/', size = 'md', variant = 'default', className = '', brandColor = '#D4AF37', companyName = 'Beyond Alpha' }) => {
    const sizes = {
        sm: 'text-xl',
        md: 'text-2xl',
        lg: 'text-3xl'
    };
    const logoContent = (_jsxs("div", { className: cn('flex items-center gap-2', className), children: [variant !== 'text-only' && (_jsx("div", { className: "w-8 h-8 rounded-md flex items-center justify-center font-bold", style: {
                    backgroundColor: brandColor,
                    color: '#0A0A0A'
                }, children: "BA" })), variant !== 'icon-only' && (_jsx("span", { className: cn('font-bold', sizes[size]), style: { color: brandColor }, children: companyName }))] }));
    if (href) {
        return (_jsx(Link, { href: href, className: "no-underline", children: logoContent }));
    }
    return logoContent;
};
export default Logo;
