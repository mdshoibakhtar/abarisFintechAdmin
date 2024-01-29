import { FaBookReader } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdDashboard, MdWeb } from "react-icons/md";
export const navigationData = {
    menus: [
        {
            id: "1",
            title: "Masters",
            active: false,
            icon: <MdDashboard />,
            subMenus: [
                {
                    id: "1",
                    title: "Bank Master",

                    path: "/bank-master"
                },
                {
                    id: "2",
                    title: "Role Master",

                    path: "/role-master"
                },
                {
                    id: "3",
                    title: "Status Master",

                    path: "status-master"
                },
                {
                    id: "4",
                    title: "Services Master",

                    path: "/service-master"
                },
                {
                    id: "5",
                    title: "Payment methods",

                    path: "/page-not-found"
                },
                {
                    id: "5",
                    title: "Payout Beneficiary ",

                    path: "/page-not-found"
                },

                {
                    id: "7",
                    title: "Agent Onboarding",

                    path: "/page-not-found"
                },
                {
                    id: "8",
                    title: "Agent Onboarding List (EKO)",

                    path: "/page-not-found"
                },
                {
                    id: "9",
                    title: "Contact Enquiry",

                    path: "/page-not-found"
                },
                {
                    id: "10",
                    title: "Company Staff Permissions",

                    path: "/company-staff-permission"
                },
                {
                    id: "11",
                    title: "Contact Enquiry",

                    path: "/page-not-found"
                },
                {
                    id: "12",
                    title: "Cashfree Gateway master",

                    path: "/page-not-found"
                },
                {
                    id: "13",
                    title: "Broadcast",

                    path: "/boardcast"
                }
            ]
        },
        {
            id: "2",
            active: false,
            title: "APIs Masters",
            icon: <FaBookReader />,
            subMenus: [
                {
                    id: "1",
                    title: "Provider  Master",

                    path: "/provider"
                },
                {
                    id: "2",
                    title: "API  Master",

                    path: "/page-not-found"
                },
                {
                    id: "3",
                    title: "Denomination Wise APIs Master",

                    path: "/page-not-found"
                },
                {
                    id: "1",
                    title: "State Wise APIs Master     ",

                    path: "/page-not-found"
                },
                {
                    id: "4",
                    title: "Backup API Master",

                    path: "/page-not-found"
                },
                {
                    id: "5",
                    title: "API Switching ",

                    path: "/page-not-found"
                },
                {
                    id: "6",
                    title: "User Operator Limit",

                    path: "/page-not-found"
                },
                {
                    id: "7",
                    title: "API Vendor Payment",

                    path: "/page-not-found"
                },

            ]
        },
        {
            id: "3",
            active: false,
            title: "Settings",
            icon: <GrSettingsOption />,
            subMenus: [
                {
                    id: "1",
                    title: "Company Settings",

                    path: "/page-not-found"
                },
                {
                    id: "2",
                    title: "Site Settings",

                    path: "/page-not-found"
                },
                {
                    id: "3",
                    title: "SMS Settings",

                    path: "/page-not-found"
                },
                {
                    id: "4",
                    title: "Package  Settings",

                    path: "/page-not-found"
                },
                {
                    id: "5",
                    title: "Bank  Settings",

                    path: "/page-not-found"
                },
                {
                    id: "5",
                    title: "Logo Settings ",

                    path: "/page-not-found"
                },

                {
                    id: "7",
                    title: "Signature ",

                    path: "/page-not-found"
                },
                {
                    id: "8",
                    title: "Service Banner Settings",

                    path: "/page-not-found"
                },
                {
                    id: "9",
                    title: "Notifications Settings",

                    path: "/page-not-found"
                },

            ]
        },
        {
            id: "4",
            active: false,
            title: "Website Masters:",
            icon: <MdWeb />,
            subMenus: [
                {
                    id: "1",
                    title: "Dynamic Page ",

                    path: "/page-not-found"
                },
                {
                    id: "2",
                    title: "Front Banners   ",

                    path: "/page-not-found"
                },
                {
                    id: "3",
                    title: "User Panel Slider ",

                    path: "/page-not-found"
                },

            ]
        },
        {
            id: "5",
            active: false,
            title: "WhatsApp",
            icon: <IoLogoWhatsapp />,
            subMenus: [
                {
                    id: "1",
                    title: "Send Role Wise ",

                    path: "/page-not-found"
                },
            ]
        }

    ]
}
