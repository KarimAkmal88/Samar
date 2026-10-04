export default function formatRelativeTime(date: string) {
    const currentDate = new Date();
    const elapsedTime = currentDate.getTime() - new Date(date).getTime();
    const elapsedMinutes = Math.floor(elapsedTime / 60000);
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    const elapsedDays = Math.floor(elapsedHours / 24)

    if(elapsedMinutes < 1 ) {
        return "Just now"
    }if(elapsedMinutes === 1 ) {
        return elapsedMinutes + ` minute ago`
    }if(elapsedMinutes > 1 && elapsedMinutes < 60){
        return elapsedMinutes +  ` minutes ago`
    }if(elapsedHours === 1 ){
        return elapsedHours + ` hour ago`
    }if(elapsedHours > 1 && elapsedHours < 24){
        return elapsedHours + ` hours ago`
    }if(elapsedDays === 1) {
        return elapsedDays + ` day ago`
    }if(elapsedDays > 1){
        return elapsedDays + ` days ago`
    }
}