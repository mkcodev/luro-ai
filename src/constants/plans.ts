type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "free",
        title: "Gratis",
        desc: "Comienza con herramientas esenciales para la creación de contenido en redes sociales",
        monthlyPrice: 0,
        yearlyPrice: 0,
        buttonText: "Comenzar",
        features: [
            "Generación de contenido básica con IA",
            "4 integraciones con redes sociales",
            "Soporte comunitario",
            "Límite de 1 proyecto",
            "Analíticas estándar",
            "Generación de imágenes básica"
        ],
        link: "https://stripe.com/free-plan-link"
    },
    {
        id: "pro",
        title: "Pro",
        desc: "Desbloquea funciones avanzadas para mejorar el contenido y la estrategia",
        monthlyPrice: 10,
        yearlyPrice: 120,
        badge: "Más Popular",
        buttonText: "Actualizar a Pro",
        features: [
            "Generación de contenido avanzada con IA",
            "10 integraciones con redes sociales",
            "Soporte prioritario por correo electrónico",
            "Límite de 10 proyectos",
            "Analíticas e información mejoradas",
            "Generación de imágenes modelo Pro",
            "Herramientas de colaboración en equipo",
            "Opciones de marca personalizadas"
        ],
        link: "https://stripe.com/pro-plan-link"
    },
    {
        id: "enterprise",
        title: "Empresarial",
        desc: "Soluciones a medida para grandes organizaciones y agencias",
        monthlyPrice: 15,
        yearlyPrice: 180,
        badge: "Contactar a Ventas",
        buttonText: "Actualizar a Empresarial",
        features: [
            "Generación de contenido ilimitada con IA",
            "Todas las integraciones de redes sociales",
            "Gerente de cuenta dedicado",
            "Proyectos ilimitados",
            "Analíticas e informes personalizados",
            "Seguridad de nivel empresarial",
            "Actualizaciones gratuitas",
            // "Soporte prioritario 24/7"
        ],
        link: "https://stripe.com/enterprise-plan-link"
    }
];
