package uk.co.xenonique.basic.mvc;

import javax.enterprise.context.RequestScoped;
import javax.inject.Named;

/**
 * The type FormErrorMessage
 *
 * @author Peter Pilgrim
 */

@Named("error")
@RequestScoped
public class FormErrorMessage {
    private String property;
    private Object value;
    private String message;

    public String getProperty() {
        return property;
    }

    public void setProperty(String property) {
        this.property = property;
    }

    public Object getValue() {
        return value;
    }

    public void setValue(Object value) {
        this.value = value;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof FormErrorMessage)) return false;

        FormErrorMessage that = (FormErrorMessage) o;

        if (property != null ? !property.equals(that.property) : that.property != null) return false;
        if (value != null ? !value.equals(that.value) : that.value != null) return false;
        return !(message != null ? !message.equals(that.message) : that.message != null);

    }

    @Override
    public int hashCode() {
        int result = property != null ? property.hashCode() : 0;
        result = 31 * result + (value != null ? value.hashCode() : 0);
        result = 31 * result + (message != null ? message.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("FormErrorMessage{");
        sb.append("property='").append(property).append('\'');
        sb.append(", value=").append(value);
        sb.append(", message='").append(message).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
