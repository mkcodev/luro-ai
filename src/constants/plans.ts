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
        desc: "Empieza con las herramientas esenciales para la creación de contenido en redes sociales",
        monthlyPrice: 0,
        yearlyPrice: 0,
        buttonText: "Empezar",
        features: [
            "Generación de contenido básico con IA",
            "4 integraciones de redes sociales",
            "Soporte de la comunidad",
            "Límite de 1 proyecto",
            "Analíticas estándar",
            "Generación de imágenes básicas"
        ],
        link: "https://stripe.com/free-plan-link"
    },
    {
        id: "pro",
        title: "Pro",
        desc: "Desbloquea funciones avanzadas para mejorar tu contenido y estrategia",
        monthlyPrice: 10,
        yearlyPrice: 120,
        badge: "Más Popular",
        buttonText: "Actualizar a Pro",
        features: [
            "Generación de contenido avanzada con IA",
            "10 integraciones de redes sociales",
            "Soporte prioritario por correo electrónico",
            "Límite de 10 proyectos",
            "Analíticas y perspectivas mejoradas",
            "Generación de imágenes con modelo Pro",
            "Herramientas de colaboración en equipo",
            "Opciones de marca personalizadas"
        ],
        link: "https://stripe.com/pro-plan-link"
    },
    {
        id: "enterprise",
        title: "Enterprise",
        desc: "Soluciones a medida para grandes organizaciones y agencias",
        monthlyPrice: 15,
        yearlyPrice: 180,
        badge: "Contactar con Ventas",
        buttonText: "Actualizar a Enterprise",
        features: [
            "Generación de contenido ilimitada con IA",
            "Todas las integraciones de redes sociales",
            "Gestor de cuenta dedicado",
            "Proyectos ilimitados",
            "Analíticas e informes personalizados",
            "Seguridad de nivel empresarial",
            "Actualizaciones gratuitas",
        ],
        link: "https://stripe.com/enterprise-plan-link"
    }
];
