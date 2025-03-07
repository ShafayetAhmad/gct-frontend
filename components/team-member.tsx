interface TeamMemberProps {
  name: string
  role: string
  bio: string
  imageSrc: string
}

export default function TeamMember({ name, role, bio, imageSrc }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        />
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-primary font-medium text-sm mb-2">{role}</p>
      <p className="text-muted-foreground text-sm">{bio}</p>
    </div>
  )
}

