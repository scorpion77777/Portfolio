import type { User } from "@prisma/client"
import { UserCircle } from "../components/user-circle"
import { useNavigate } from '@remix-run/react'




interface props {
    users: User[]
}

export function UserPanel({ users }: props) {
    const navigate = useNavigate()
    return (
        <div className="w-1/6 bg-green-200 flex flex-col">
            <div className="text-center bg-blue-700 h-20 flex items-center justify-center">
                <h2 className="text-xl text-white font-semibold">My Team</h2>
                <img className="h-16 w-16 m-2 ml-4 cursor-pointer"
                    src="https://img.icons8.com/plasticine/512/homer-simpson.png"
                    alt="Sonic Youth On Stage"></img>
            </div>
            <div className="flex-1 overflow-y-scroll py-4 flex flex-col gap-y-10">
                {users.map((user) =>
                    <UserCircle
                        key={user.id}
                        profile={user.profile}
                        className="h-24 w-24 mx-auto flex-shrink-0"
                        onClick={() => navigate(`kudo/${user.id}`)}
                    />
                )}
            </div>
            <div className="text-center p-6 bg-blue-700">
                <form action="/logout" method="post">
                    <button type="submit" className="rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1">
                        Sign Out
                    </button>
                </form>
            </div>
        </div>
    )
}